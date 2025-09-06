<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-a580
import React from 'react';



=======
import React from 'react';'
describe('Navigation', () => {'

=======
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navigation from '../components/Navigation'
describe('Navigation'
  test('renders without crashing'
    expect(screen.getByRole('main'
  test('displays correct content'
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import Navigation from \'../components/Navigation\'; describe(\'Navigation\',() => { test(\'renders without crashing\',() => { render(<Navigation />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import Navigation from "./components/Navigation"; describe('Navigation', () => { test("renders without crashing",() => { render(<Navigation />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content"
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import Navigation from '../components/Navigation'; describe('Navigation',() => { test('renders without crashing',() => { render(<Navigation />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
ursor/fix-syntax-push-and-merge-to-main-40de
origin/main
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from '../components/Navigation';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
describe('Navigation', () => {

  test('renders without crashing', () => {
    render(<Navigation />);'
    expect(screen.getByRole('main')).toBeInTheDocument();
<<<<<<< HEAD
  });
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662


=======


  test('displays correct content', () => {
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import Navigation from '../components/Navigation'; describe('Navigation',() => { test('renders without crashing',() => { render(<Navigation />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6


  test('displays correct content', () => {
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();



=======

=======
});'
  test('displays correct content', () => {
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
});
<<<<<<< HEAD
});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  test('displays correct content', () => {
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
});
<<<<<<< HEAD
>>>>>>> origin/main
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
origin/main
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navigation from '../components/Navigation'
describe('Navigation'
  test('renders without crashing'
    expect(screen.getByRole('main'
  test('displays correct content'
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import Navigation from \'../components/Navigation\'; describe(\'Navigation\',() => { test(\'renders without crashing\',() => { render(<Navigation />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<Navigation />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});'
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import Navigation from "./components/Navigation"; describe('Navigation', () => { test("renders without crashing",() => { render(<Navigation />); expect(screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
=======
});
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
describe('Navigation';
  test('renders without crashing';
    expect(screen && screen.getByRole('main';
  test('displays correct content';
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import Navigation from \'../components/Navigation\'; describe(\'Navigation\',() => { test(\'renders without crashing\',() => { render(<Navigation />); expect(screen && screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<Navigation />); expect(screen && screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import Navigation from "./components/Navigation"; describe('Navigation', () => { test("renders without crashing",() => { render(<Navigation />); expect(screen && screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
});'
describe('Navigation';'
  test('renders without crashing';'
    expect(screen && screen.getByRole('main';'
  test('displays correct content';'
import React from \'react\'; import { render,screen } from \'@testing-library/react\'; import \'@testing-library/jest-dom\'; import Navigation from \'../components/Navigation\'; describe(\'Navigation\',() => { test(\'renders without crashing\',() => { render(<Navigation />); expect(screen && screen.getByRole(\'main\')).toBeInTheDocument()}); test(\'displays correct content\',() => { render(<Navigation />); expect(screen && screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});'"
const React from "react"; import { render,screen } from "@testing-library/react"; import "@testing-library/jest-dom"; import Navigation from "./components/Navigation"; describe('Navigation', () => { test("renders without crashing",() => { render(<Navigation />); expect(screen && screen.getByRole("main")).toBeInTheDocument()}); test("displays correct content"'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  test('displays correct content', () => {
    render(<Navigation />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });
});'
import { render, screen } from '@testing - library / react';'
import '@testing - library / jest - dom';'
import Navigation from '../components / Navigation';'
describe ('Navigation', () => {'
  test ('renders without crashing', () => {
    render (<Navigation />);'
    expect (screen.getByRole ('main')).toBeInTheDocument ();
  });'
  test ('displays correct content', () => {
    expect (screen.getByText (/Zion Tech Group / i)).toBeInTheDocument ();
});'"

});
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  test('displays correct content', () => {
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
});

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
origin/automation-improvements-final
});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
