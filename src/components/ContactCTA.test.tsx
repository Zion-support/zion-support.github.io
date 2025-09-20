<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport ContactCTA from ./ContactCTAdescribe(ContactCTA,() => {" it(renders without crashing",() => {" render(<ContactCTA />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<ContactCTA />);
=======
import { render,screen  } from "@testing-library/reactimport ContactCTA from ./ContactCTAdescribe(ContactCTA,() => {" it(renders without crashing",() => {" render(<ContactCTA />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<ContactCTA />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</ContactCTA /><//ContactCTA />