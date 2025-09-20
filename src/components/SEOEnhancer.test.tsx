<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport SEOEnhancer from ./SEOEnhancerdescribe(SEOEnhancer",() => { it("renders without crashing",() => { render(<SEOEnhancer />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<SEOEnhancer />);
=======
import { render,screen  } from "@testing-library/reactimport SEOEnhancer from ./SEOEnhancerdescribe(SEOEnhancer",() => { it("renders without crashing",() => { render(<SEOEnhancer />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<SEOEnhancer />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</SEOEnhancer /><//SEOEnhancer />