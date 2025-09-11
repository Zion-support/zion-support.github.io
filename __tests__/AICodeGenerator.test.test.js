ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AICodeGeneratortest from '../components/AICodeGenerator.test';



=======import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import AICodeGeneratortest from '../components/AICodeGenerator.test'
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import AICodeGeneratortest from "./components/AICodeGenerator.test"; describe('AICodeGeneratortest', () => { test("renders without crashing",() => { render(<AICodeGeneratortest />); expect(screen.getByTestId("aicodegenerator.test")).toBeInTheDocument()}); test("displays correct content",() => { render(<AICodeGeneratortest />)}); test("handles user interactions",() => { render(<AICodeGeneratortest />)}); test("applies correct styling"
<<<<<<< HEAD
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
