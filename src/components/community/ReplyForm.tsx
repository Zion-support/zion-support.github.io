import React, { useState } from "react;";
import { Button } from "@/components/ui/button, ";

interface ReplyFormProps {onSubmit: (content: string) => void;
}
}
placeholder?: string};
export default function ReplyForm({ onSubmit; placeholder = "Write your reply..." }: ReplyFormProps) {const [content; setContent] = useState("");
import { useState } from "react";,
import { useForm, ControllerRenderProps } from "react-hook-form";,
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {;