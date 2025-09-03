<<<<<<< HEAD
import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import Accessibility from './Accessibility';
""
describe('Accessibility', () => {""
  it('renders without crashing', () => {
    render(<Accessibility /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
  it('displays expected content', () => {
    render(<Accessibility /" >);"
    // Add more specific tests here, });, });
""
=======
<<<<<<< HEAD
describe('Accessibility', () => {}' it('renders without crashing', () => {} render(<Accessibility />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<Accessibility />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import Accessibility from './Accessibility
describe('Accessibility', () => {"
  it('renders without crashing', () => {
    render(<Accessibility /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<Accessibility /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
>>>>>>> main
