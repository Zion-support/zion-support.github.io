}} className="bg-gray - 50 dark:bg-gray - 800 p - 4 rounded-lg">
                    <h4 className="font - medium text-gray - 900 dark:text-white mb-3">Create New Model</h4>
                    <div className="grid grid - cols - 1 md:grid - cols - 3 gap-4">
                      <input type="text" placeholder="Model Name" value={newModelForm.name} onChange = { (e) => setNewModelForm(prev => ({ ...prev,
  name: e.target.value

}) ) } className="px-3 py-2 border border-gray - 300 dark:border-gray - 600 rounded-lg bg-white dark:bg-gray - 700 text-gray - 900 dark:text-white"/>
                      <select value={newModelForm.type} onChange = { (e) => setNewModelForm(prev => ({ ...prev,
  type: e.target.value
                      <select value={newModelForm.framework} onChange = { (e) => setNewModelForm(prev => ({ ...prev,
  framework: e.target.value
                    </div>) }) }

                {trainingJobs.length === 0 && (<div className="text-center py-8 text-gray - 500 dark:text-gray -400">
                    <Activity className="w-12 h-12 mx - auto mb-4 text-gray -400"/>
                    <p > No training jobs found</p>
                    <p className="text-sm">Start training a model to see jobs here</p>
                  </div>) }
              {/* Prediction Form */}
              <div className="bg-gray - 50 dark:bg-gray - 800 p - 4 rounded-lg">
                <div className="grid grid - cols - 1 md:grid - cols - 2 gap-4 mb-4">
                  <select value={predictionForm.modelId} onChange = { (e) => setPredictionForm(prev => ({ ...prev,
  modelId: e.target.value
                </div>
                <textarea placeholder="Enter input data(JSON format) " value={predictionForm.input} onChange = { (e) => setPredictionForm(prev => ({ ...prev,
  input: e.target.value

                        {prediction.status === 'completed' && prediction.result && (<div className="text-sm text-gray - 700 dark:text-gray -300">
                            <p><strong > Result:</strong> {JSON.stringify(prediction.result) }</p>
                            {prediction.confidence && (<p><strong > Confidence:</strong> { (prediction.confidence * 100) .toFixed(1) }%</p>) }
                            {prediction.processingTime && (<p><strong > Processing Time:</strong> {prediction.processingTime}ms</p>) }
                          </div>) }

                        {prediction.status === 'failed' && prediction.error && (<div className="text-sm text-red - 600 dark:text-red -400">
                            <strong > Error:</strong> {prediction.error}
                          </div>) }
                      </div>) }) }

                  {predictions.length === 0 && (<div className="text-center py-4 text-gray - 500 dark:text-gray -400">
                      <Target className="w-8 h-8 mx - auto mb-2 text-gray -400"/>
                      <p > No predictions yet</p>
                    </div>) }
