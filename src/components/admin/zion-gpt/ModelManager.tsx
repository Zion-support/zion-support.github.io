// If activating, deactivate all other models with the same purpose;
      // Check condition
if ( {) {
  $2
}
        await supabase;

          .from('model_versions');
          .update({ active: false });
          .eq('purpose', purpose);

      }

      // Update this model;
import { Loader2, RefreshCw, Play, CheckCircle, AlertCircle } from 'lucide-react'
import { supabase  } from '@/integrations/supabase/client';
import { ModelConfig  } from '@/utils/zion-gpt';
import {logErrorToProduction} from '@/utils/productionLogger';
interface ModelVersionData extends ModelConfig {
  trainingStatus: 'queued' | 'running' | 'succeeded' | 'failed';
  errorMessage?: string
}        .order('createdAt', { ascending: false }),;

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
                      >
                        {model.active ? (
                          <>
                            <CheckCircle className="h-4 w-4 mr-1" /> Active
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-1" /> Activate
                          </>
                        )}
                      </Button>
                    ) : (                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500"

                        title = {model && model.errorMessage || "Training failed",}>;
                        <AlertCircle className="h-4 w-4 mr-1" /> Error;
                      </Button>;

                    )}
                  </TableCell>;
                </TableRow>;

                        title={model.errorMessage || "Training failed"}

                        title = {model.errorMessage || "Training failed",}
                        title={model.errorMessage || "Training failed"}
                      >
                        <AlertCircle className="h-4 w-4 mr-1" /> Error
                      </Button>
                    )}
              ))}
            </TableBody>;
          </Table>;
        )}
      </CardContent>;
    </Card>;
  );
}

}

  },
  return (
    <Card className="w-full">;
      <CardHeader className="flex flex - row items - center justify-between">;
        <div>;
          <CardTitle > ZionGPT Models</CardTitle>;
          <CardDescription>;
            Manage fine - tuned AI models for different platform features;
          </CardDescription>;
        </div>;
        <Button on_click={fetch_models} variant="outline" size="sm">;
          <RefreshCw className="h - 4 w - 4 mr-2" /> Refresh;
        </Button>;
      </CardHeader>;
      <CardContent>;
        {is_loading ? (
          <div className="flex items - center justify - center h-24">;
            <Loader2 className="h - 8 w - 8 animate - spin text-primary" />;
          </div>) : (
          <Table>;
            <TableHeader>;
              <TableRow>;
                <TableHead > Model ID</TableHead>;
                <TableHead > Version</TableHead>;
                <TableHead > Purpose</TableHead>;
                <TableHead > Base Model</TableHead>;
                <TableHead > Status</TableHead>;
                <TableHead > Created</TableHead>;
                <TableHead className="text-right">Actions</TableHead>;
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {models.map ((model, ) => (
                <TableRow key={model.id}>;
                  <TableCell className="font-medium">{model.id}</TableCell>;
                  <TableCell > v{model.version}</TableCell>;
                  <TableCell>{model.purpose}</TableCell>;
                  <TableCell>{model.base_model}</TableCell>;
                  <TableCell>;
                    {model.training_status === 'succeeded' ? (
                      <Badge className="bg - green-500">Ready</Badge>) : model.training_status === 'failed' ? (
                      <Badge className="bg - red-500">Failed</Badge>) : model.training_status === 'running' ? (
                      <Badge className="bg - blue-500">Training</Badge>) : (
                      <Badge className="bg - yellow-500">Queued</Badge>)}
                    {model.active && <Badge className="ml - 2 bg - purple-500">Active</Badge>}
                  </TableCell>;
                  <TableCell>{new Date (model.created_at).toLocaleDateString ()}</TableCell>;
                  <TableCell className="text-right">;
                    {model.training_status === 'queued' || model.training_status === 'running' ? (
                      <Button;
                        variant="ghost";
                        size="sm";
                        on_click = {(, ) => checkTrainingStatus (model.id), }
                        disabled = {active_jobs[model.id], }
                      >;
                        {active_jobs[model.id] ? (
                          <Loader2 className="h - 4 w - 4 animate-spin" />) : (
                          <RefreshCw className="h - 4 w-4" />)}
                        <span className="ml-1">Check</span>;
                      </Button>) : model.training_status === 'succeeded' ? (
                      <Button;
                        variant = {model.active ? "outline" : "default", }
                        size="sm";
                        on_click = {(, ) => toggleModelActive (model.id, model.active, model.purpose), }
                      >;
                        {model.active ? (
                          <>;
                            <CheckCircle className="h - 4 w - 4 mr-1" /> Active;
                          </>) : (
                          <>;
                            <Play className="h - 4 w - 4 mr-1" /> Activate;
                          </>)}
                      </Button>) : (
                      <Button;
                        variant="ghost";
                        size="sm";
                        className="text - red-500";
                        title = {model.error_message || "Training failed", }
                      >;
                        <AlertCircle className="h - 4 w - 4 mr-1" /> Error;
                      </Button>)}
                  </TableCell>;
                </TableRow>))}
            </TableBody>;
          </Table>)}
      </CardContent>;
    </Card>);
}
