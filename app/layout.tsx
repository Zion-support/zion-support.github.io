export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
<body className={inter.className}>
        {children}
      </body>
    </html>
  );
