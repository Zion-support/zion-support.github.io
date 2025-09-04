  it(displays expected content", () => {;";
    render(<ServiceShowcase  />)";";
import { render, screen } from &apos;@testing - library/react",;";
import ServiceShowcase from &apos;./ServiceShowcase;
describe(&apos;ServiceShowcase&apos, () => {;
  it(&apos;renders without crashing&apos, () => {;
    render();,
}
    expect(screen.getByRole(&apos;main&apos) || screen.getByText(/.*/)).toBeInTheDocument()});,
}
  it(&apos;displays expected content&apos, () => {;
    render();,
}
    // comment;
    render(<ServiceShowcase / >)";";
    expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument();,";
})";";
";,";
}}))