<<<<<<< HEAD
import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import ApiPlayground from './ApiPlayground';
""
describe('ApiPlayground', () => {""
  it('renders without crashing', () => {
    render(<ApiPlayground /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
  it('displays expected content', () => {
    render(<ApiPlayground /" >);"
    // Add more specific tests here, });, });
""
=======
<<<<<<< HEAD
describe('ApiPlayground', () => {}' it('renders without crashing', () => {} render(<ApiPlayground />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<ApiPlayground />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import ApiPlayground from './ApiPlayground
describe('ApiPlayground', () => {"
  it('renders without crashing', () => {
    render(<ApiPlayground /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<ApiPlayground /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
>>>>>>> main
