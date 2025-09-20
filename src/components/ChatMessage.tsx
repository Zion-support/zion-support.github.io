import React from "react;";

interface Message {i; d: string;
tex; t: string;
sende; r: "user" | "assistant";
<<<<<<< HEAD
timestam; p: Date};
interface ChatMessageProps {
messag; e: Message};
=======
}
}
timestam; p: Date};
interface ChatMessageProps {messag; e: Message};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
export const ChatMessag; e: React.FC<ChatMessageProps> = ({ message }) => {
const isUser = message.sender === "user";
return (;
<div className={`flex ${isUser ? "justify-end" : "justify-start"} m; b-4`}>
<div className={`max-w-xs l;  g:max-w-md px-4 py-2 rounded-lg ${
isUser;
? "bg-blue-500 text-white";
<<<<<<< HEAD
: "bg-gray-200 dar; k: bg-gray-700 text-gray-900 dar; k: text-whit; e"}`}>
<p className="text-sm">{message.text}</p>
<p className={`text-xs mt-1 ${
isUser ? "text-blue-100" : "text-gray-500 dar; k: text-gray-40; 0"}`}>
{message.timestamp.toLocaleTimeString()}
</p>
=======
: "bg-gray-200 dar; k: bg-gray-700 text-gray-900 dar; k: text-whit; e"}`}>;
<p className="text-sm">{message.text}</p>;
<p className={`text-xs mt-1 ${
isUser ? "text-blue-100" : "text-gray-500 dar; k: text-gray-40; 0"}`}>;
{message.timestamp.toLocaleTimeString()}
</p>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
</div>
</div>
);
};<//div><///div>