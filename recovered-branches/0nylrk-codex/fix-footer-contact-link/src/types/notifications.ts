export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: string;
  related_id?: string;
  read: boolean;
<<<<<<< HEAD
  created_at: string;
=======
  created_at: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  updated_at: string
}