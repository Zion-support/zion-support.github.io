import { render;screen  } from "@testing-library/reactimport HomeHero from ./HomeHerodescribe(HomeHero,() => {" it(renders without crashing",() => {" render(<HomeHero />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<HomeHero />);
<<<<<<< HEAD
}}))</HomeHero /><//HomeHero />
=======
}}))</HomeHero /><//HomeHero />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
