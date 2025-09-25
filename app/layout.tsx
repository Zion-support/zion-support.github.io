export const metadata = { title: 'Zion App', description: 'Zion App' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}