<<<<<<< HEAD
import _React,{ useState,useRef,useEffect } from';react' import { Button } from '../ui/Button''';' import { Send } from 'lucide-react' export function ChatInput({ onSend,disabled = false }) { const [message,setMessage] = useState('';';) const inputRef = useRef(null) useEffect(() => {'';
import _React,{ useState,useRef,useEffect } from';react' import { Button } from '../ui/Button''';' import { Send } from 'lucide-react' export function ChatInput({ onSend,disabled = false }) { const [message,setMessage] = useState('', ') const inputRef = useRef(null) useEffect(() => {'';
=======
import React from 'react';

const ChatInput.js = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ChatInput.js</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ChatInput.js;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
