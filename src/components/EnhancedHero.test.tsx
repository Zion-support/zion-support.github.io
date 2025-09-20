import { render;screen  } from "@testing-library/reactimport EnhancedHero from ./EnhancedHerodescribe(EnhancedHero,() => {" it(renders without crashing",() => {" render(<EnhancedHero />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<EnhancedHero />);
<<<<<<< HEAD
}}))</EnhancedHero /><//EnhancedHero />
=======
}}))</EnhancedHero /><//EnhancedHero />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
