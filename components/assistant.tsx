
import {useEffect, useMemo, useState} from 'react';
interface Message {
  role: 'user' | 'assistant';
  content: string;
export default function Assistant() {
  const params =
    typeof window !== 'undefined'
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const tenantId = params.get('tenantId') |'';
  const brand = params.get('brand') |'Zion AI';
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant'
      content: `Hi! I am ${brand} Assistant. Ask me about roles, hiring timelines, and more.`
    }
  ]);
  const [input, setInput] = useState('');
