import "./globals.css";

export const metadata = {
  title: "Zion Tech Group",
  description: "Technology consulting and solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main role="main">{children}</main>
      </body>
    </html>
  );
}

