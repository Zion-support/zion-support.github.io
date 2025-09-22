import _React,{ useState,useRef,useEffect } from';react' import { Button } from '../ui/Button''';' import { Send } from 'lucide-react' export function ChatInput({ onSend,disabled = false }) { const [message,setMessage] = useState('';';) const inputRef = useRef(null) useEffect(() => {'';
const ChatInput.js = ({ className }) => {
  return ('
    <div className={className || ''}>'
</div>
      <h1>ChatInput.js</h1>
      <p>This component is under development.</p>
    </div>
  )
};

