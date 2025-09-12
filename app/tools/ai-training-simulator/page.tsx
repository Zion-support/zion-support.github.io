import React, { useState, useEffect } from 'react';
import SEO from "../../components/SEO";
import Card from '../../../components/ui/Card';

export default function AITrainingSimulator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [isTraining, setIsTraining] = useState(false);
  const [trainingData, setTrainingData] = useState({
    dataset: '',
    algorithm: '',
    parameters: {},
    epochs: 100
  });

  const trainingSteps = [
    {
      id: 'dataset_selection',
      title: 'Dataset Selection',
      description: 'Choose your training dataset and configuration',
      icon: '📊',
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Dataset</label>
            <select
              value={trainingData.dataset}
              onChange={(e) => setTrainingData(prev => ({ ...prev, dataset: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Choose a dataset...</option>
              <option value="customer_data">Customer Behavior Dataset</option>
              <option value="image_classification">Image Classification Dataset</option>
              <option value="text_sentiment">Text Sentiment Analysis</option>
              <option value="sales_forecasting">Sales Forecasting Data</option>
              <option value="fraud_detection">Fraud Detection Dataset</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Training Split</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option value="80-20">80% Training, 20% Testing</option>
                <option value="70-30">70% Training, 30% Testing</option>
                <option value="90-10">90% Training, 10% Testing</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Data Preprocessing</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option value="standard">Standard Scaling</option>
                <option value="minmax">Min-Max Scaling</option>
                <option value="robust">Robust Scaling</option>
                <option value="none">No Preprocessing</option>
              </select>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'algorithm_selection',
      title: 'Algorithm Selection',
      description: 'Choose the machine learning algorithm for your model',
      icon: '🧠',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Linear Regression', type: 'regression', complexity: 'Low', accuracy: 'Good' },
              { name: 'Random Forest', type: 'classification', complexity: 'Medium', accuracy: 'Excellent' },
              { name: 'Neural Network', type: 'both', complexity: 'High', accuracy: 'Excellent' },
              { name: 'Support Vector Machine', type: 'both', complexity: 'Medium', accuracy: 'Good' },
              { name: 'Gradient Boosting', type: 'both', complexity: 'Medium', accuracy: 'Excellent' },
              { name: 'K-Means Clustering', type: 'clustering', complexity: 'Low', accuracy: 'Good' }
            ].map((algorithm, index) => (
              <div
                key={index}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  trainingData.algorithm === algorithm.name
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setTrainingData(prev => ({ ...prev, algorithm: algorithm.name }))}
              >
                <h3 className="font-semibold mb-2">{algorithm.name}</h3>
                <div className="text-sm space-y-1">
                  <p><span className="font-medium">Type:</span> {algorithm.type}</p>
                  <p><span className="font-medium">Complexity:</span> {algorithm.complexity}</p>
                  <p><span className="font-medium">Accuracy:</span> {algorithm.accuracy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'parameter_tuning',
      title: 'Parameter Tuning',
      description: 'Configure hyperparameters for optimal performance',
      icon: '⚙️',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Learning Rate</label>
              <input
                type="range"
                min="0.001"
                max="0.1"
                step="0.001"
                defaultValue="0.01"
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>0.001</span>
                <span>0.1</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Epochs</label>
              <input
                type="number"
                min="10"
                max="1000"
                value={trainingData.epochs}
                onChange={(e) => setTrainingData(prev => ({ ...prev, epochs: parseInt(e.target.value) }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Batch Size</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option value="32">32</option>
                <option value="64">64</option>
                <option value="128">128</option>
                <option value="256">256</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Optimizer</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option value="adam">Adam</option>
                <option value="sgd">SGD</option>
                <option value="rmsprop">RMSprop</option>
                <option value="adamax">Adamax</option>
              </select>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Advanced Parameters</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Regularization</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option value="none">None</option>
                  <option value="l1">L1</option>
                  <option value="l2">L2</option>
                  <option value="both">L1 + L2</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Dropout Rate</label>
                <input type="range" min="0" max="0.5" step="0.1" defaultValue="0.2" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Early Stopping</label>
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option value="enabled">Enabled</option>
                  <option value="disabled">Disabled</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'training_execution',
      title: 'Training Execution',
      description: 'Execute the model training process',
      icon: '🚀',
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Ready to Train Your Model</h3>
            <p className="text-gray-600 mb-6">
              Review your configuration and start the training process
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Training Configuration</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><span className="font-medium">Dataset:</span> {trainingData.dataset}</p>
                  <p><span className="font-medium">Algorithm:</span> {trainingData.algorithm}</p>
                </div>
                <div>
                  <p><span className="font-medium">Epochs:</span> {trainingData.epochs}</p>
                  <p><span className="font-medium">Estimated Time:</span> {Math.round(trainingData.epochs * 0.5)} minutes</p>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => {
                setIsTraining(true);
                simulateTraining();
              }}
              disabled={!trainingData.dataset || !trainingData.algorithm}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              🚀 Start Training
            </button>
          </div>
        </div>
      )
    }
  ];

  const [trainingResults, setTrainingResults] = useState(null);

  const simulateTraining = () => {
    setTrainingProgress(0);
    const interval = setInterval(() => {
      setTrainingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          setTrainingResults({
            accuracy: 94.2,
            loss: 0.156,
            precision: 92.8,
            recall: 91.5,
            f1Score: 92.1,
            trainingTime: Math.round(trainingData.epochs * 0.5),
            epochsCompleted: trainingData.epochs
          });
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  const nextStep = () => {
    if (currentStep < trainingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = trainingSteps[currentStep];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="AI Training Simulator - Zion Tech Group"
        description="Interactive AI model training simulator. Learn machine learning concepts by training models with different datasets, algorithms, and parameters in a safe environment."
        keywords="AI training simulator, machine learning training, ML simulator, AI model training, ML education, AI learning"
        url="/tools/ai-training-simulator"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              🎓 AI Training Simulator
            </h1>
            <p className="text-xl">
              Learn machine learning concepts by training models with different datasets, algorithms, and parameters.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep + 1} of {trainingSteps.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(((currentStep + 1) / trainingSteps.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / trainingSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Training Progress */}
        {isTraining && (
          <Card className="p-6 mb-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">🚀 Training in Progress...</h3>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div
                  className="bg-green-600 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${trainingProgress}%` }}
                ></div>
              </div>
              <p className="text-gray-600">Training Progress: {trainingProgress}%</p>
              <p className="text-sm text-gray-500 mt-2">
                Epoch {Math.round((trainingProgress / 100) * trainingData.epochs)} of {trainingData.epochs}
              </p>
            </div>
          </Card>
        )}

        {/* Training Results */}
        {trainingResults && (
          <Card className="p-6 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-green-600 mb-2">🎉 Training Complete!</h3>
              <p className="text-gray-600">Your model has been successfully trained</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">{trainingResults.accuracy}%</div>
                <p className="text-sm font-medium">Accuracy</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">{trainingResults.f1Score}%</div>
                <p className="text-sm font-medium">F1 Score</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-1">{trainingResults.loss}</div>
                <p className="text-sm font-medium">Loss</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-1">{trainingResults.precision}%</div>
                <p className="text-sm font-medium">Precision</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">{trainingResults.recall}%</div>
                <p className="text-sm font-medium">Recall</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-600 mb-1">{trainingResults.trainingTime}m</div>
                <p className="text-sm font-medium">Training Time</p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => {
                  setTrainingResults(null);
                  setTrainingProgress(0);
                  setCurrentStep(0);
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                🔄 Train New Model
              </button>
            </div>
          </Card>
        )}

        {/* Main Content */}
        {!trainingResults && (
          <Card className="p-8">
            {/* Step Header */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{currentStepData.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentStepData.title}</h2>
                  <p className="text-gray-600">{currentStepData.description}</p>
                </div>
              </div>
            </div>

            {/* Step Content */}
            <div className="mb-8">
              {currentStepData.content}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 transition-colors"
              >
                Previous
              </button>
              
              {currentStep < trainingSteps.length - 1 ? (
                <button
                  onClick={nextStep}
                  disabled={currentStep === 3 && (!trainingData.dataset || !trainingData.algorithm)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              ) : null}
            </div>
          </Card>
        )}

        {/* Learning Resources */}
        <Card className="p-8 mt-8">
          <h3 className="text-2xl font-bold mb-6">📚 Learning Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
              <h4 className="text-xl font-bold mb-3">🎓 Machine Learning Course</h4>
              <p className="mb-4">Comprehensive course covering all aspects of machine learning</p>
              <a href="/resources" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Learning
              </a>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg">
              <h4 className="text-xl font-bold mb-3">🔧 Hands-on Workshop</h4>
              <p className="mb-4">Join our interactive ML workshop with real-world projects</p>
              <a href="/services" className="inline-block bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Register Now
              </a>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 mt-8 bg-gradient-to-r from-blue-500 to-green-500 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Master AI and Machine Learning?</h3>
            <p className="text-lg mb-6">
              Get expert guidance and hands-on training with our comprehensive AI education programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 Schedule Consultation
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                🎓 View Training Programs
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}