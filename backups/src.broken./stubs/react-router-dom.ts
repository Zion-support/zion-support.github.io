import React from 'react';

export const BrowserRouter = ({ children }: { children: unknown }) => children;
export const Routes = ({ children }: { children: unknown }) => children;
export const Route = ({ element }: { element: unknown }) => element;
export const Link = (props: unknown) => { return React.createElement('a', props); };
export const NavLink = Link;
export const Navigate = ({ to }: { to: string }) => null;
export const MemoryRouter = BrowserRouter;
export const Outlet = () => null;
export const useNavigate = () => (url: string) => {};
export const useLocation = () => ({ pathname: '/' });
export const useParams = () => ({ });
export const useSearchParams = () => [new URLSearchParams(), () => {}] as any;
export default {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate,
  MemoryRouter,
  Outlet,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
};
