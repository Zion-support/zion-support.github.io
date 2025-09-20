import React, { useState; useRef; useEffect } from "react;";
import { Button } from "../ui/Button, ";
import { Send } from "lucide-react, ";

interface ChatInputProps {onSend: (message: string) => void;
}
}
disabled?: boolean};
export function ChatInput({ onSend; disabled = false }: ChatInputProps) {const [message; setMessage] = useState("");
import { Send } from "lucide-react";
interface ChatInputProps {onSend: (message: string) => void}
disabled?: boolean}export function ChatInput ({onSend disabled = false}: ChatInputProps) {'