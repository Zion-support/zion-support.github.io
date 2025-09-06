export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: string;
  related_id?: string;
  read: boolean;
<<<<<<< HEAD

  created_at: string

  updated_at: string
}
=======
  created_at: string,
  updated_at: string;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
