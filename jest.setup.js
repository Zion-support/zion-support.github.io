require('@testing-library/jest-dom')
import React from 'react
jest.mock(react-router-dom, () => {
const actual = jest.requireActual(react-router-dom)
  const React = require(react)
      pathname: '/
      search: '
      hash: '
      state: null})
    useParams: () => ({})
    Link: ({ children, to, ...props }) => {
      return React.createElement('a, { href: to, ...props }, children)}
    NavLink: ({ children, to, ...props }) => {
      return React.createElement('a, { href: to, ...props }, children)}
    BrowserRouter: ({ children }) => children
    MemoryRouter: ({ children }) => {
const { createMemoryRouter, RouterProvider } = actual
      const router = createMemoryRouter([
        {
          path: '/
          element: children}], {
        initialEntries: ['/]
        initialIndex: 0})
      return React.createElement(RouterProvider, { router })}
    RouterProvider: ({ router }) => null}})
global.IntersectionObserver = class IntersectionObserver {
constructor() {}
    return []}
// Suppress console errors in tests
const originalError = console.error
      return}
    originalError.call(console, ...args)})})
afterAll(() => {
  console.error = originalError})