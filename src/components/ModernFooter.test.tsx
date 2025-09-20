<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport ModernFooter from ./ModernFooterdescribe(ModernFooter,() => {" it(renders without crashing",() => {" render(<ModernFooter />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<ModernFooter />);
=======
import { render,screen  } from "@testing-library/reactimport ModernFooter from ./ModernFooterdescribe(ModernFooter,() => {" it(renders without crashing",() => {" render(<ModernFooter />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<ModernFooter />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</ModernFooter /><//ModernFooter />