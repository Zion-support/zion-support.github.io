export const metadata = {
  title: 'Zion App',
  description: 'Minimal app layout',
}

import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

