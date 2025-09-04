<<<<<<< HEAD
it(displays expected content', () => {';';';';';
    render(<TrustScoreBadge  />)',';';';';
    ';';';';';
import { render, screen } from &apos;@testing-library/react',';';';';';
    ',';';';';
    ';';';';';
import TrustScoreBadge from &apos;./TrustScoreBadge';
describe(&apos;TrustScoreBadge&apos, () => {
  it(&apos;renders without crashing&apos, () => {
    render(&apos}}&apos;<TrustScoreBadge  />)';
    expect(screen.getByRole(&apos;main&apos) || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it(&apos;displays expected content&apos, () => {';';';
    render(&apos}<TrustScoreBadge  />)';';';';
    // Add specific test assertions based on component content})})';';';';';
    render(<TrustScoreBadge  />)',';';';';
    ';';';';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();""';';
})';';';
";';';';';
}}';';';';';
"';';';';;';;';
=======
it(displays expected content',() => {';';'; render(<TrustScoreBadge />)',';'; ';';'; import { render,screen } from &apos;@testing-library/react',';';'; ',';'; ';';'; import TrustScoreBadge from &apos;./TrustScoreBadge'; describe(&apos;TrustScoreBadge&apos,() => { it(&apos;renders without crashing&apos,() => { render(&apos}}&apos;<TrustScoreBadge />) expect(screen.getByRole(&apos;main&apos) || screen.getByText(/.*/)).toBeInTheDocument()}) it(&apos;displays expected content&apos,() => {'; render(&apos}<TrustScoreBadge />)';'; render(<TrustScoreBadge />)',';'; ';';'; expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();"" })'; ";';'}}';';'; "';';';';
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
