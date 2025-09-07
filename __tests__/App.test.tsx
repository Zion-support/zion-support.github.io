import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import App from '../src/App';'
describe('App', () => {it('renders without crashing', () => {render(<App />)expect(screen.getByRole('main')).toBeInTheDocument()})it('has proper heading structure', () => {render(<App />)const heading = screen.getByRole('heading', { "level": 1 })expect(heading).toBeInTheDocument()},'
})import '@testing-library/jest-dom';'
describe('App', () => {test('renders without crashing', () => {render(<App />)expect(screen.getByRole('heading', { "level": 1, "name": 'Zion Tech Group' })).toBeInTheDocument()},'
})ursor/fix-website-loading-errors-and-merge-6662;
})describe('App';'
  it('renders without crashing';'
    expect(screen.getByRole('main';'
  it('has proper heading structure';'

const heading = screen.getByRole('heading', { "level": '1';'

}

const heading = screen.getByRole('heading';'
ursor/automate-test-improve-and-merge-code-646c;
describe("App", () => {test("renders without crashing", () => {render(<App />)expect(screen.getByRole("heading", { "level": 1, "name": "Zion Tech Group","
}),).toBeInTheDocument()})})it('has proper heading structure', () => {render(<App />)const heading = screen.getByRole('heading', { "level": 1 })expect(heading).toBeInTheDocument()},'
})ursor/automate-test-improve-and-merge-code-646c;