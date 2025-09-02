import React from 'react';'
import { render, screen } from '@testing-library/react';"'"'"
import { BrowserRouter } from 'react-router-dom';"'"'"
import App from '../App';"'"'"
// Mock the pages to avoid complex dependencies;"''"
jest.mock('../pages/Index', () => {}"'"
  return function MockIndex() {}"''"
    return <div data-testid='index-page'></di>Index Page</div>,"'"
}",''
})';'"
jest.mock('../pages/About', () => {}"'"
  return function MockAbout() {}"''
';'
''"
    return <div data-testid='about-page'></di>About Page</div>,"'"
}",;''
})';'"
jest.mock('../pages/Contact', () => {}"'"
  return function MockContact() {}"''
';'
''
    return <div data-testid='contact-page'></di>Contact Page</div>,"
}""
})""'"
// Mock the pages to avoid complex dependencies"'"'"
jest.mock('../pages/Index', () => {""'"
  return function MockIndex() {"'"'"
    return <div data-testid='index-page'></di>Index Page</div>}})"'"'"
jest.mock('../pages/About', () => {""'"
  return function MockAbout() {"'"'"
    return <div data-testid='about-page'></di>About Page</div>}})"'"'"
jest.mock('../pages/Contact', () => {""'"
  return function MockContact() {"''
    return <div data-testid='contact-page'></di>Contact Page</div>}})
// Wrap App with Router for testing
const renderWithRouter = (component) => {
  return render(
    <BrowserRouter></BrowserRouter>
      {component}"
    </BrowserRouter>""
  )}""'"
"'"'"
describe('App Component', () => {"'"'"
  test('renders without crashing', () => {";"'"
    renderWithRouter(<App /"" ></App>);"''
    expect(screen.getByTestId('index-page')).toBeInTheDocument()})})
export { MockIndex, MockAbout, MockContact }
export { MockIndex, MockAbout, MockContact }
export { MockIndex, MockAbout, MockContact }"
export { MockIndex, MockAbout, MockContact }""
"""
export { MockIndex, MockAbout, MockContact, MockIndex, MockAbout, MockContact }""'"
"'"'"