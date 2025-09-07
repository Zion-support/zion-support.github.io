

import React, {
  useState,
  useRef,
  useEffect,
  FormEvent,


} from "react";""
} from "react";""
import { Button } from "@/components/ui/button";""
import { Send } from "lucide-react";"
interface ChatInputProps {;
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatInput(): any ({ onSend, disabled = false }: ChatInputProps) {;"
  const [message, setMessage] = useState("");"
  const inputRef = useRef<HTMLTextAreaElement>(null);
</HTMLTextAreaElement>
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {;
</HTMLFormElement>
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {;
</HTMLTextAreaElement>
  const inputRef = useRef<HTMLTextAreaElement>(null),;
</HTMLTextAreaElement>
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {;
</HTMLFormElement>
  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {;
</HTMLTextAreaElement>"
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;"
</form>"
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;"
</form>
      <textarea;
        ref={inputRef}"
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light"""
        placeholder="Type your message...""
        value={message}
        onChange={(e) => setMessage(e && e.target.value)}
</textarea>
  const inputRef = useRef<HTMLTextAreaElement>(null),;
</HTMLTextAreaElement>
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {;
</HTMLFormElement>
  const handleKeyPress = (e:KeyboardEvent<HTMLTextAreaElement>) => {;
</HTMLTextAreaElement>"
    <form onSubmit={handleSubmit} className="flex items-end gap-2">;"
</form>
      <textarea;
        ref={inputRef}"
        className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light";""
        placeholder="Type your message...";        value={message}"
        onChange={(e) => setMessage(e.target.value)}
</textarea>
      <Button;"
        type="submit"""
        className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center""
        disabled={!message.trim() || disabled}
      >
</Button>"
        <Send className="h-5 w-5" />"
</Send>
      </Button>
    </form>"

