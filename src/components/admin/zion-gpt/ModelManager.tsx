import { useState, useEffect  } from 'react';
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge";
}


        .order('createdAt', { ascending: false })
  const toggleModelActive = async (modelId: string, currentActive: boolean, purpose: string,) => {
    try {
      // If activating, deactivate all other models with the same purpose
      if (!currentActive) {
        await supabase
          .from('model_versions')
          .update({ active: false })
          .eq('purpose', purpose)
>>>>>>>       }
      // Update this model
      await supabase
        .from('model_versions')
        .update({ active: !currentActive })
        .eq('id', modelId)
      // Refresh the model list
      fetchModels()
    } catch (error) {
      logErrorToProduction('Error toggling model active state:', { data: error })
    }
  }
ursor/fix-website-loading-errors-and-merge-6662
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
    }


        .order('createdAt', { ascending: false }),;



  const toggleModelActive = async (modelId: string, currentActive: boolean, purpose: string,) => {;
    try {;
      // If activating, deactivate all other models with the same purpose;
      if (!currentActive) {;
        await supabase;
          .from('model_versions');
          .update({ active: false });
          .eq('purpose', purpose);
      }

      // Update this model;
      await supabase;
        .from('model_versions');
        .update({ active: !currentActive });
        .eq('id', modelId),;

      // Refresh the model list;
      fetchModels();
    } catch (error) {;
      logErrorToProduction('Error toggling model active state:', { data: error });
    }
  },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  },

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
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
          </div>;
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
                    ) : (;
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
                        onClick = {(,) => checkTrainingStatus(model.id),}
                        disabled = {activeJobs[model.id],}
                        onClick={() => checkTrainingStatus(model.id)}
                        disabled={activeJobs[model.id]}
                        onClick = {(,) => checkTrainingStatus(model.id),}
                        disabled = {activeJobs[model.id],}
>>>>>>>                       >
                        {activeJobs[model.id] ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <RefreshCw className="h-4 w-4" />
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                        )}
                        <span className="ml-1">Check</span>;
                      </Button>;
                    ) : model && model.trainingStatus === 'succeeded' ? (;
                      <Button
                        variant = {model.active ? "outline" : "default",}
                        size="sm"
                        onClick = {(,) => toggleModelActive(model.id, model.active, model.purpose),}
>>>>>>>                       >
                        {model.active ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-1" /> Active
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-1" /> Activate
                          </>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
                        )}
                      </Button>;
                    ) : (;
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500"
                        title = {model.errorMessage |"Training failed",}
                        title = {model.errorMessage || "Training failed",}
                        title={model.errorMessage || "Training failed"}
>>>>>>> >>>>>>>                       >
                        <AlertCircle className="h-4 w-4 mr-1" /> Error
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
>>>>>>>               ))}
            </TableBody>
          </Table>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
              ))}
            </TableBody>;
          </Table>;
>>>>>>>         )}
      </CardContent>;
    </Card>;
  );
}
>>>>>>> 



>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 