<<<<<<< HEAD
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
=======
// global styles are optional; keeping layout minimal

export const metadata = {
  title: 'Zion Tech Group',
  description: 'AI, cloud, and micro SaaS solutions'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-bd83
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-bd83
}
