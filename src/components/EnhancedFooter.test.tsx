<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport EnhancedFooter from ./EnhancedFooterdescribe(EnhancedFooter,() => {" it(renders without crashing",() => {" render(<EnhancedFooter />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<EnhancedFooter />);
=======
import { render,screen  } from "@testing-library/reactimport EnhancedFooter from ./EnhancedFooterdescribe(EnhancedFooter,() => {" it(renders without crashing",() => {" render(<EnhancedFooter />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<EnhancedFooter />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</EnhancedFooter /><//EnhancedFooter />