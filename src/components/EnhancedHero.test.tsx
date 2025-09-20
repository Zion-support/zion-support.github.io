<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport EnhancedHero from ./EnhancedHerodescribe(EnhancedHero,() => {" it(renders without crashing",() => {" render(<EnhancedHero />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<EnhancedHero />);
=======
import { render,screen  } from "@testing-library/reactimport EnhancedHero from ./EnhancedHerodescribe(EnhancedHero,() => {" it(renders without crashing",() => {" render(<EnhancedHero />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<EnhancedHero />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</EnhancedHero /><//EnhancedHero />