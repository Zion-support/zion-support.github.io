import React from 'react';
import '@testing-library/jest-dom';
import AIChatbotSystemtest from '../components/AIChatbotSystem.test';
<<<<<<< HEAD
=======


import React from 'react';
import '@testing-library/jest-dom';
import AIChatbotSystemtest from '../components/AIChatbotSystem.test';
>>>>>>> origin/main
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AIChatbotSystemtest from '../components/AIChatbotSystem.test';

<<<<<<< HEAD
=======



describe('AIChatbotSystemtest', () => {
  test('renders without crashing', () => {
    render(<AIChatbotSystemtest />);
    expect(screen.getByTestId('aichatbotsystem.test')).toBeInTheDocument();
  });
  
  
>>>>>>> origin/main
  test('displays correct content', () => {
    render(<AIChatbotSystemtest />);
  });
  
<<<<<<< HEAD
    render(<AIChatbotSystemtest />);
  });
  
  test('handles user interactions', () => {
    render(<AIChatbotSystemtest />);
  });
=======



  test('displays correct content', () => {
    render(<AIChatbotSystemtest />);
  });
  
  
  test('displays correct content', () => {
    render(<AIChatbotSystemtest />);
  });
  
  test('handles user interactions', () => {
    render(<AIChatbotSystemtest />);
  });


>>>>>>> origin/main
  
  test('applies correct styling', () => {
    render(<AIChatbotSystemtest />);
  });
});
<<<<<<< HEAD
=======
  test('applies correct styling', () => {
>>>>>>> origin/main
    render(<AIChatbotSystemtest />);
  });
});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
=======


>>>>>>> origin/main
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import AIChatbotSystemtest from '../components/AIChatbotSystem.test'
<<<<<<< HEAD
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import AIChatbotSystemtest from "./components/AIChatbotSystem.test"; describe('AIChatbotSystemtest', () => { test("renders without crashing",() => { render(<AIChatbotSystemtest />); expect(screen.getByTestId("aichatbotsystem.test")).toBeInTheDocument()}); test("displays correct content",() => { render(<AIChatbotSystemtest />)}); test("handles user interactions",() => { render(<AIChatbotSystemtest />)}); test("applies correct styling"
=======
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import AIChatbotSystemtest from "./components/AIChatbotSystem.test"; describe('AIChatbotSystemtest', () => { test("renders without crashing",() => { render(<AIChatbotSystemtest />); expect(screen.getByTestId("aichatbotsystem.test")).toBeInTheDocument()}); test("displays correct content",() => { render(<AIChatbotSystemtest />)}); test("handles user interactions",() => { render(<AIChatbotSystemtest />)}); test("applies correct styling"
>>>>>>> origin/main
