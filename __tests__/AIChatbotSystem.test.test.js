<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import React from 'react';
import '@testing-library/jest-dom';
import AIChatbotSystemtest from '../components/AIChatbotSystem.test';
<<<<<<< HEAD

=======
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import AIChatbotSystemtest from "./components/AIChatbotSystem.test"; describe("AIChatbotSystemtest",() => { test("renders without crashing",() => { render(<AIChatbotSystemtest />); expect(screen.getByTestId("aichatbotsystem.test")).toBeInTheDocument()}); test("displays correct content",() => { render(<AIChatbotSystemtest />)}); test("handles user interactions",() => { render(<AIChatbotSystemtest />)}); test("applies correct styling",() => { render(<AIChatbotSystemtest />)})});''"
=======
>>>>>>> origin/main
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AIChatbotSystemtest from '../components/AIChatbotSystem.test';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======

>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
describe('AIChatbotSystemtest', () => {
  test('renders without crashing', () => {
    render(<AIChatbotSystemtest />);
    expect(screen.getByTestId('aichatbotsystem.test')).toBeInTheDocument();
  });
<<<<<<< HEAD
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
  test('displays correct content', () => {
    render(<AIChatbotSystemtest />);
  });
  test('handles user interactions', () => {
    render(<AIChatbotSystemtest />);
  });
=======
  
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
  
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  test('displays correct content', () => {
    render(<AIChatbotSystemtest />);
  });
  
  test('handles user interactions', () => {
    render(<AIChatbotSystemtest />);
  });
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  test('applies correct styling', () => {
    render(<AIChatbotSystemtest />);
  });
});
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
  
  test('applies correct styling', () => {
    render(<AIChatbotSystemtest />);
  });
});
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
