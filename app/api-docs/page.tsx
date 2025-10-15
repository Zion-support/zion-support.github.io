import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Code, Key, Star, ArrowRight, Zap } from 'lucide-react';

const ApiDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const apiEndpoints = [
  const features = [
    {
      title: 'AI Services',
        description: 'Core AI functionality and machine learning services',
        endpoints: [
          {
            method: 'POST',
            path: '/api/v1/ai/predict',
            description: 'Make predictions using trained AI models',
            example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/predict" \\
    -H "Authorization: Bearer YOUR_API_KEY" \\
    -H "Content-Type: application/json" \\
    -d '{
      "model_id": "sentiment-analysis-v1",
      "input_data": {
        "text": "I love this product!"
      }
    }'`
          },
          {
            method: 'POST',
            path: '/api/v1/ai/train',
            description: 'Train a new AI model with your data',
            example: `curl -X POST "https://api.ziontechgroup.com/v1/ai/train" \\
    -H "Authorization: Bearer YOUR_API_KEY" \\
    -H "Content-Type: application/json" \\
    -d '{
      "model_name": "custom-classifier",
      "training_data": [...],
      "model_type": "classification"
    }'`
          },
          {
            method: 'GET',
            path: '/api/v1/ai/models',
            description: 'List all available AI models',
            example: `curl -X GET "https://api.ziontechgroup.com/v1/ai/models" \\
    -H "Authorization: Bearer YOUR_API_KEY"`
          }
        ]
      },
  ];

  const sdkExamples = [
}
</string>