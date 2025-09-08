<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/Button";
=======
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "../ui/Button";
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
import { Send } from "lucide-react";
export function ChatInput({ onSend, disabled = false }) {
    const [message, setMessage] = useState('');
    const inputRef = useRef(null);
    useEffect(() => {
<<<<<<< HEAD
        var _a;
        // Focus input when component mounts
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
=======
        // Focus input when component mounts
        inputRef.current?.focus();
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() && !disabled) {
            onSend(message);
            setMessage('');
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };
<<<<<<< HEAD
    return (_jsxs("form", { onSubmit: handleSubmit, className: "flex items-end gap-2", children: [_jsx("textarea", { ref: inputRef, className: "flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light", placeholder: "Type your message...", value: message, onChange: (e) => setMessage(e.target.value), onKeyDown: handleKeyPress, rows: 1, disabled: disabled }), _jsx(Button, { type: "submit", className: "bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center", disabled: !message.trim() || disabled, children: _jsx(Send, { className: "h-5 w-5" }) })] }));
=======
    return (<form onSubmit={handleSubmit} className="flex items-end gap-2">
      <textarea ref={inputRef} className="flex-1 min-h-[40px] max-h-[120px] px-3 py-2 bg-zion-blue-dark border border-zion-blue-light rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent resize-none text-white placeholder:text-zion-slate-light" placeholder="Type your message..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={handleKeyPress} rows={1} disabled={disabled}/>
      <Button type="submit" className="bg-zion-purple hover:bg-zion-purple-light text-white rounded-full p-2 h-10 w-10 flex items-center justify-center" disabled={!message.trim() || disabled}>
        <Send className="h-5 w-5"/>
      </Button>
    </form>);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
}
