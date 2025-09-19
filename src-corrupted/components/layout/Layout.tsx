import React from 'react';
import { AppHeader } from '../../layout/AppHeader';
type LayoutProps = {,
  children: React.ReactNode,};
export default function Layout(props: any) {,
  return (,
    <div className="min-h-screen flex flex-col bg-black">,
      <AppHeader />,
      <main className="flex-1 pt-20 lg:pt-24">{children,}</main>,
      <footer className="border-t border-zion-cyan/20 bg-black/90">,
        <div className="container mx-auto px-4 py-8 text-sm text-gray-300">,
          <div className="flex flex-col md: flex-row items-center justify-between gap-4">,
            <div className="opacity-80">© {new Date().getFullYear(),} Zion Tech Group</div>,
            <nav className="flex flex-wrap items-center gap-4">,
              <a className="hover: text-white" href="/privacy">Privacy</a>,
              <a className="hover:text-white" href="/terms">Terms</a>,
              <a className="hover:text-white" href="/contact">Contact</a>,
            </nav>,
          </div>,
        </div>,
      </footer>,
    </div>,
  ),}