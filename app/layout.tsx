import React from "react";
import "./globals.css";

export const metadata = {
  title: "Zion Tech Group",
  description: "AI, Micro SaaS, and IT Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}