<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport ModernErrorBoundary from ./ModernErrorBoundarydescribe(ModernErrorBoundary,() => {" it(renders without crashing",() => {" render(<ModernErrorBoundary />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<ModernErrorBoundary />);
=======
import { render,screen  } from "@testing-library/reactimport ModernErrorBoundary from ./ModernErrorBoundarydescribe(ModernErrorBoundary,() => {" it(renders without crashing",() => {" render(<ModernErrorBoundary />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<ModernErrorBoundary />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</ModernErrorBoundary /><//ModernErrorBoundary />