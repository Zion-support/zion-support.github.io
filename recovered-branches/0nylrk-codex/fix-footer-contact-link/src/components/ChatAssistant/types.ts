export interface Message {
  id: string;
  role: "user" | "assistant";
  message: string;
  timestamp: Date;
  read?: boolean;
}
export interface Recipient {
  id: string;
  name: string;
  avatar_url?: string;
  role?: string;
}