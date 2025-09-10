import React from "react"

import { Settings } from 'lucide-react';

export default function Page() {

> {

  showHeader?: boolean;
  showSettings?: boolean;
  maxMessages?: number;
  autoScroll?: boolean}

showHeader:  true;
  showSettings = true;
  maxMessages = 50;
  autoScroll = true;
}) => {;
  const [messages, setMessages] = useState < ChatMessage[]> ([]) ;
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSettingsPanel, setShowSettingsPanel] = useState(false);
  const [settings, setSettings] = useState({
    voiceEnabled: false,
    autoResponse: true,
    language: "en",
    theme: "dark",
    responseSpeed: "normal"