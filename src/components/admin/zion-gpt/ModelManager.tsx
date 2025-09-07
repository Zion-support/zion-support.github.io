// If activating, deactivate all other models with the same purpose;
      // Check condition
if ( {) {
  $2
}

      // Update this model;

      await supabase;
        .from ('model_versions');
        .update ({ active: !current_active });
        .eq ('id', model_id),
      // Refresh the model list;
      fetch_models ();

    } catch (error) {
      logErrorToProduction ('Error toggling model active state:', { data: error });

        .order('createdAt', { ascending: false }),;

  const toggleModelActive = async (modelId: string, currentActive: boolean, purpose: string,) => {;
    try {;
      if (!currentActive) {;
          .from('model_versions');
          .update({ active: false });
          .eq('purpose', purpose);

        .update({ active: !currentActive });
        .eq('id', modelId),;

      fetchModels();
    } catch (error) {;
      logErrorToProduction('Error toggling model active state:', { data: error });
  },;

  },

  return (
    <Card className="w-full">;
      <CardHeader className="flex flex-row items-center justify-between">;
        <div>;
          <CardTitle>ZionGPT Models</CardTitle>;
          <CardDescription>;
            Manage fine-tuned AI models for different platform features;
          </CardDescription>;
        </div>;
        <Button onClick={fetchModels} variant="outline" size="sm">;
          <RefreshCw className="h-4 w-4 mr-2" /> Refresh;
        </Button>;
      </CardHeader>;
      <CardContent>;
        {isLoading ? (;
          <div className="flex items-center justify-center h-24">;
            <Loader2 className="h-8 w-8 animate-spin text-primary" />;
        ) : (;
          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead>Model ID</TableHead>;
                <TableHead>Version</TableHead>;
                <TableHead>Purpose</TableHead>;
                <TableHead>Base Model</TableHead>;
                <TableHead>Status</TableHead>;
                <TableHead>Created</TableHead>;
                <TableHead className="text-right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {models && models.map((model,) => (;
                <TableRow key={model && model.id}>;
                  <TableCell className="font-medium">{model && model.id}</TableCell>;
                  <TableCell>v{model && model.version}</TableCell>;
                  <TableCell>{model && model.purpose}</TableCell>;
                  <TableCell>{model && model.baseModel}</TableCell>;
                  <TableCell>;
                    {model && model.trainingStatus === 'succeeded' ? (;
                      <Badge className="bg-green-500">Ready</Badge>;
                    ) : model && model.trainingStatus === 'failed' ? (;
                      <Badge className="bg-red-500">Failed</Badge>;
                    ) : model && model.trainingStatus === 'running' ? (;
                      <Badge className="bg-blue-500">Training</Badge>;
                      <Badge className="bg-yellow-500">Queued</Badge>;
                    )}
                    {model.active && <Badge className="ml-2 bg-purple-500">Active</Badge>}
                  </TableCell>
                  <TableCell>{new Date(model.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    {model.trainingStatus === 'queued' |model.trainingStatus === 'running' ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick = {(,) => checkTrainingStatus(model && model.id),}
                        disabled = {activeJobs[model && model.id],}
                      >;
                        {activeJobs[model && model.id] ? (;
                          <Loader2 className="h-4 w-4 animate-spin" />;
                          <RefreshCw className="h-4 w-4" />;

                    {model.trainingStatus === 'queued' || model.trainingStatus === 'running' ? (

                      >
                        {activeJobs[model.id] ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <RefreshCw className="h-4 w-4" />
                        <span className="ml-1">Check</span>;
                    ) : model && model.trainingStatus === 'succeeded' ? (;
                        variant = {model.active ? "outline" : "default",}
                        onClick = {(,) => toggleModelActive(model.id, model.active, model.purpose),}
                        variant={model.active ? "outline" : "default"}
                        onClick={() => toggleModelActive(model.id, model.active, model.purpose)}

                        {model.active ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-1" /> Active
                          </>
                            <Play className="h-4 w-4 mr-1" /> Activate
                        className="text-red-500"

                        title = {model && model.errorMessage || "Training failed",}>;
                        <AlertCircle className="h-4 w-4 mr-1" /> Error;

                  </TableCell>;

                        title={model.errorMessage || "Training failed"}

                        title = {model.errorMessage || "Training failed",}
                        <AlertCircle className="h-4 w-4 mr-1" /> Error
                      </Button>
                </TableRow>

              ))}
            </TableBody>;
          </Table>;
      </CardContent>;
    </Card>;
  );

    <Card className="w - full">;
      <CardHeader className="flex flex - row items - center justify - between">;
          <CardTitle > ZionGPT Models</CardTitle>;
            Manage fine - tuned AI models for different platform features;
        <Button on_click={fetch_models} variant="outline" size="sm">;
          <RefreshCw className="h - 4 w - 4 mr - 2" /> Refresh;
        {is_loading ? (
          <div className="flex items - center justify - center h - 24">;
            <Loader2 className="h - 8 w - 8 animate - spin text - primary" />;
          </div>) : (
                <TableHead > Model ID</TableHead>;
                <TableHead > Version</TableHead>;
                <TableHead > Purpose</TableHead>;
                <TableHead > Base Model</TableHead>;
                <TableHead > Status</TableHead>;
                <TableHead > Created</TableHead>;
                <TableHead className="text - right">Actions</TableHead>;
              {models.map ((model, ) => (
                <TableRow key={model.id}>;
                  <TableCell className="font - medium">{model.id}</TableCell>;
                  <TableCell > v{model.version}</TableCell>;
                  <TableCell>{model.purpose}</TableCell>;
                  <TableCell>{model.base_model}</TableCell>;
                    {model.training_status === 'succeeded' ? (
                      <Badge className="bg - green - 500">Ready</Badge>) : model.training_status === 'failed' ? (
                      <Badge className="bg - red - 500">Failed</Badge>) : model.training_status === 'running' ? (
                      <Badge className="bg - blue - 500">Training</Badge>) : (
                      <Badge className="bg - yellow - 500">Queued</Badge>)}
                    {model.active && <Badge className="ml - 2 bg - purple - 500">Active</Badge>}
                  <TableCell>{new Date (model.created_at).toLocaleDateString ()}</TableCell>;
                  <TableCell className="text - right">;
                    {model.training_status === 'queued' || model.training_status === 'running' ? (
                      <Button;
                        variant="ghost";
                        size="sm";
                        on_click = {(, ) => checkTrainingStatus (model.id), }
                        disabled = {active_jobs[model.id], }
                        {active_jobs[model.id] ? (
                          <Loader2 className="h - 4 w - 4 animate - spin" />) : (
                          <RefreshCw className="h - 4 w - 4" />)}
                        <span className="ml - 1">Check</span>;
                      </Button>) : model.training_status === 'succeeded' ? (
                        variant = {model.active ? "outline" : "default", }
                        on_click = {(, ) => toggleModelActive (model.id, model.active, model.purpose), }
                          <>;
                            <CheckCircle className="h - 4 w - 4 mr - 1" /> Active;
                          </>) : (
                            <Play className="h - 4 w - 4 mr - 1" /> Activate;
                          </>)}
                      </Button>) : (
                        className="text - red - 500";
                        title = {model.error_message || "Training failed", }
                        <AlertCircle className="h - 4 w - 4 mr - 1" /> Error;
                      </Button>)}
                </TableRow>))}
          </Table>)}
    </Card>);