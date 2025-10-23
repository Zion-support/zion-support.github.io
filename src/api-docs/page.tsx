
const ApiDocsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }
=======
import React, {useState} from 'react';
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
import {Key, Copy, Code} from 'lucide-react';;

constApiDocsPage: React.FC= () =>{const [copiedCodesetCopiedCode]=useState<string | null>(null);
  
  constcopyToClipboard= (code: string, id: string) => {
  
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null),2000);
 };
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1

  constapiEndpoints= [
    {id: 'ai-chat',
      title: 'AI Chat API',
      method: 'POST',
      endpoint: '/$1/v1/$1/chat',
      description: 'Send messages to our AI chatbot and get intelligent responses.',
      example: `curl -X POST "https://api.ziontechgroup.com/$1/ai/chat" \\
  -H "Authorization: BearerYOUR_API_KEY" \\
  -H "Content-Type:application/json" \\
  -d '{
    "message":"Hello, how can you help me?",
   "context":"customer_support"
}'`
    },
    {id: 'ai-analysis',
      title: 'AI Data Analysis',
      method: 'POST',
      endpoint: '/$1/v1/$1/analyze',
      description: 'Analyze data using our AI models for insights and predictions.',
      example: `curl -X POST"https:// api.ziontechgroup.com/$1/ai/analyze" \\
  -H"Authorization: Bearer YOUR_API_KEY" \\
  -H"Content-Type: application/json" \\
  -d '{
   "data": [1, 2, 3, 4, 5],
   "analysis_type":"trend_analysis"
}'`
    }
  ]

  return (

export default ApiDocsPage