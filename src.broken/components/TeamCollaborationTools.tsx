
export default function Page() {
interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  replies: Comment[]
}

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  type: 'text' | 'file' | 'image' | 'link';
  attachments?: string[];
  reactions: { type: string; count: number
            { id: 'team', label: 'Team Members', icon: <Users className="w-4 h-4"  /> },"
            { id: 'projects', label: 'Projects', icon: <Target className="w-4 h-4"  /> },"
            { id: 'communication', label: 'Communication', icon: <MessageCircle className="w-4 h-4"  /> },"
            { id: 'files', label: 'File Sharing', icon: <FileText className="w-4 h-4"  /> }
          ].map((tab) => (
