

interface ModelVersionData extends ModelConfig {_trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed';
  errorMessage?: string;}

export function ZionGPTModelManager() {_const [models, _setModels] = useState<ModelVersionData[]>([]);
  const [isLoading, _setIsLoading] = useState(true);
  const [activeJobs, _setActiveJobs] = useState<{[key: string]: boolean}>({});

  // Fetch model data on component mount
  useEffect__(() => {_fetchModels();}, []);

  const _fetchModels = async () => {_try {
      setIsLoading(true);
      const { data, _error} = await supabase
        .from('model_versions')
        .select('*')
        .order('createdAt', {_ascending: false});
      
      if (error) throw error;
      
      // Map the data to our component state
      setModels(data.map(model => ({_id: model.id, _version: model.version, _createdAt: model.created_at, _baseModel: model.base_model, _purpose: model.purpose, _active: model.active, _trainingStatus: model.training_status, _errorMessage: model.error_message})));
    } catch (error) {} finally {_setIsLoading(false);}
  };

  const _checkTrainingStatus = async (_modelId: string) => {_try {
      setActiveJobs(prev => ({ ...prev, _[modelId]: true}));
      
      // Call an edge function that checks the OpenAI fine-tuning job status
      const {_data, _error} = await supabase.functions.invoke(_'check-training-status', _{_body: { modelId}
      });
      
      if (error) throw error;
      
      // Update the local model status
      setModels(prev => 
        prev.map(model => 
          model.id === modelId 
            ? {_...model, _trainingStatus: data.status, _errorMessage: data.error || null} 
            : model
        )
      );
      
      // Also update in the database
      await supabase
        .from('model_versions')
        .update({_training_status: data.status, _error_message: data.error || null, _// If training succeeded, _automatically set to active
          ...(data.status === 'succeeded' ? { active: true} : {})
        })
        .eq('id', modelId);
      
    } catch (error) {} finally {_setActiveJobs(prev => ({ ...prev, _[modelId]: false}));
    }
  };

  const _toggleModelActive = async (_modelId: string, _currentActive: boolean, _purpose: string) => {_try {
      // If activating, _deactivate all other models with the same purpose
      if (!currentActive) {
        await supabase
          .from('model_versions')
          .update({ active: false})
          .eq('purpose', purpose);
      }
      
      // Update this model
      await supabase
        .from('model_versions')
        .update({_active: !currentActive})
        .eq('id', modelId);
      
      // Refresh the model list
      fetchModels();
    } catch (error) {}
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>ZionGPT Models</CardTitle>
          <CardDescription>
            Manage fine-tuned AI models for different platform features
          </CardDescription>
        </div>
        <Button onClick={_fetchModels} variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" /> Refresh
        </Button>
      </CardHeader>
      <CardContent>
        {_isLoading ? (
          <div className="flex items-center justify-center h-24">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (_<Table>
            <TableHeader>
              <TableRow>
                <TableHead>Model ID</TableHead>
                <TableHead>Version</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Base Model</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {models.map((model) => (
                <TableRow key={model.id}>
                  <TableCell className="font-medium">{_model.id}</TableCell>
                  <TableCell>v{_model.version}</TableCell>
                  <TableCell>{_model.purpose}</TableCell>
                  <TableCell>{_model.baseModel}</TableCell>
                  <TableCell>
                    {_model.trainingStatus === 'succeeded' ? (
                      <Badge className="bg-green-500">Ready</Badge>
                    ) : model.trainingStatus === 'failed' ? (
                      <Badge className="bg-red-500">Failed</Badge>
                    ) : model.trainingStatus === 'running' ? (
                      <Badge className="bg-blue-500">Training</Badge>
                    ) : (
                      <Badge className="bg-yellow-500">Queued</Badge>
                    )}
                    {_model.active && <Badge className="ml-2 bg-purple-500">Active</Badge>}
                  </TableCell>
                  <TableCell>{_new Date(model.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    {_model.trainingStatus === 'queued' || model.trainingStatus === 'running' ? (_<Button
                        variant="ghost"
                        size="sm"
                        onClick={() => checkTrainingStatus(model.id)}
                        disabled={_activeJobs[model.id]}
                      >
                        {_activeJobs[model.id] ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <RefreshCw className="h-4 w-4" />
                        )}
                        <span className="ml-1">Check</span>
                      </Button>
                    ) : model.trainingStatus === 'succeeded' ? (_<Button
                        variant={_model.active ? "outline" : "default"}
                        size="sm"
                        onClick={_() => toggleModelActive(model.id, _model.active, _model.purpose)}
                      >
                        {_model.active ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-1" /> Active
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-1" /> Activate
                          </>
                        )}
                      </Button>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500"
                        title={_model.errorMessage || "Training failed"}
                      >
                        <AlertCircle className="h-4 w-4 mr-1" /> Error
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
