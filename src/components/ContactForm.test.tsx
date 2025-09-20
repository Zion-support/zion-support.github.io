<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport ContactForm from ./ContactFormdescribe(ContactForm,() => {" it(renders without crashing",() => {" render(<ContactForm />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<ContactForm />);
=======
import { render,screen  } from "@testing-library/reactimport ContactForm from ./ContactFormdescribe(ContactForm,() => {" it(renders without crashing",() => {" render(<ContactForm />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<ContactForm />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</ContactForm /><//ContactForm />