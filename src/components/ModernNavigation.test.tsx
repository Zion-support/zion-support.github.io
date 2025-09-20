<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport ModernNavigation from ./ModernNavigationdescribe(ModernNavigation,() => {" it(renders without crashing",() => {" render(<ModernNavigation />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<ModernNavigation />);
=======
import { render,screen  } from "@testing-library/reactimport ModernNavigation from ./ModernNavigationdescribe(ModernNavigation,() => {" it(renders without crashing",() => {" render(<ModernNavigation />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<ModernNavigation />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</ModernNavigation /><//ModernNavigation />