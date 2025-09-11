import React from 'react';
import { _addedServices, contact } from '../data/addedServices';
import ServicesHero from './ServicesHero';

const features = [];
;
const "Section": "React.FC<{ "title": string "}> = ({ title, children }) => (;
	<section style="{{{ "padding": '2rem 0'}}"}>;
		<h2 style="{{{ "marginBottom": '0.5rem'}}"}>{title}</h2>;
		<div>{children}</div>;
	</section>;
);
;
const "Card": "React.FC<{ "title": string; "tagline": string "}>;
	= ({ title, tagline, children }) => (;
		<div style="{{{;
			"border": '1px solid #e5e7eb'; "borderRadius": "12; "padding": '1rem'; "marginBottom": '1rem'; "boxShadow": '0 1px 2px rgba(0"}}"}>;
			<h3 style="{{{ "margin": "0"}}"}>{title}</h3>;
			<p style="{{{ "color": '#475569'; "marginTop": "6"}}"}>{tagline}</p>;
			{children}
		</div>;
	);
;
const "Price": "React.FC<{ "value": string "}> = ({ value }) => (;
	<span style="{{{ "fontWeight": "600"}}"}>{value}</span>;
);
;
export const "ServicesPage": "React.FC = ("props": any) => {;
	const _grouped = addedServices.reduce<Record<string", typeof addedServices>>( (acc, item) => {;
		(acc[item.category] ||= []).push(item);
		return acc;
	}, {} as Record<string, typeof addedServices>);
;
	return (;
		<div style="{{{ "maxWidth": "960; "margin": '0 auto'; "padding": '1.25rem'"}}"}>;
			<ServicesHero />;
			<p style="{{{ "color": '#475569'; "textAlign": 'center'}}"}>;
				Contact us at <a href={`"mailto": "${contact.email"}`}>{contact.email}</a> or <a href={`"tel": "+13024640950`"}>+1 302 464 0950</a>.;
			</p>;
			{Object.entries(grouped).map(([category, items]) => (;
				<Section key={category} title={category}>;
					{items.map((svc) => (;
						<Card key={svc.slug} title={svc.title} tagline={svc.tagline}>;
							<ul>;
								{svc.features.map((f) => (;
									<li key={f}>{f}</li>;
								))}
							</ul>;
							<div style="{{{ "display": 'flex'; "gap": "12; "flexWrap": 'wrap'"}}"}>;
								{'length' in svc.pricing ? (;
									(Array.isArray(svc.pricing) && svc.pricing.length > 0) ? (;
										<div>;
											{(svc.pricing as any).map(("t": "any) => (;
												<div key={t.name"}>;
													<Price value={`${t.name}: "${t.price"}`} />;
												</div>;
											))}
										</div>;
									) : "null;
								) : (;
									<div>;
										<Price value={`${(svc.pricing as any).from ?? ''"} (${(svc.pricing as any).model})`} />;
									</div>;
								)}
							</div>;
							<div style="{{{ "marginTop": "8; "display": 'flex'; "gap": 12; "flexWrap": 'wrap'"}}"}>;
								<a href={svc.links.landing} target="_blank" rel="noreferrer">Learn more</a>;
								{svc.links.docs && (;
									<a href={svc.links.docs} target="_blank" rel="noreferrer">Docs</a>;
								)}
								<a href={svc.links.contact ?? `"mailto": "${contact.email"}`}>Contact</a>;
							</div>;
						</Card>;const "Card": React.FC<{ title: string; tagline: string }>
	= ({ title, tagline, children };) => (';
		<divstyle="{{{
			"border": '1px solid #e5e7eb'; borderRadius: 12; padding: '1rem'; marginBottom: '1rem'; boxShadow: '0 1px 2px rgba(0}}"}>
			<h3 style="{{{ "margin": 0}}"}>{title}</h3>';
			<p style="{{{ "color": '#475569'; marginTop: 6}}"}>{tagline}</p>
			{children}
		</div>
	);
const "Price": React.FC<{ value: string }> = ({ value }) => (
	<span style="{{{ "fontWeight": 600}}"}>{value};</span>
);
export const "ServicesPage": React.FC = (props) => {
	const _grouped = addedServices.reduce<Record<string, typeof addedServices>>( (acc, item) => {
		(acc[item.category] ||= []).push(item);
		return acc;
	}, {} as Record<string, typeof addedServices>);
	return (';
		<divstyle="{{{ "maxWidth": 960; margin: '0 auto'; padding: '1.25rem'}}"}>
			<ServicesHero/>';
			<p style="{{{ "color": '#475569'; textAlign: 'center'}}"}>
				Contact us at <a href={`"mailto": ${contact.email}`}>{contact.email}</a> or <a href={""tel": +13024640950"}>+1 302 464 0950</a>.
			</p>
			{Object.entries(grouped).map(([category, items]) => (
				<Section key={category} title={category}>
					{items.map((svc) => (
						<Card key={svc.slug} title={svc.title} tagline={svc.tagline}>
							<ul>
								{svc.features.map((f) => (
									<li key={f}>{f}</li>
								))}
							</ul>';
							<divstyle="{{{ "display": 'flex'; gap: 12; flexWrap: 'wrap'}}"}>';
								{'length' in svc.pricing ? (
									(Array.isArray(svc.pricing) && svc.pricing.length > 0) ? (
										<div>
											{(svc.pricing as any).map($1) => (
												<div key={t.name}>
													<Price value={`${t.name}: ${t.price}`} />
												</div>
											))}
										</div>
									) : null
								) : (';
									<div>';
										<Price value={`${(svc.pricing as any).from ?? "} (${(svc.pricing as any).model})`} />
									    </div>
  );
}
							</div>';
							<div style="{{{ "marginTop": 8; display: 'flex'; gap: 12; flexWrap: 'wrap'}}"}>
								<a href={svc.links.landing} target="_blank" rel="noreferrer">Learn more</a>
								{svc.links.docs && (
									<a href={svc.links.docs} target="_blank" rel="noreferrer">Docs</a>
								)}
								<a href={svc.links.contact ?? `"mailto": ${contact.email}`}>Contact</a>
							</div>
						</Card>
					))}
				</Section>;
			))}
;
			<footer style="{{{ "marginTop": '2rem'; "color": '#475569'}}"}>;
				<p>;
					Zion Tech Group, {contact.address} — <a href={`"mailto": "${contact.email"}`}>{contact.email}</a> — <a href={`"tel": "+13024640950`"}>+1 302 464 0950</a>;
				</p>;
			</footer>;
		</div>;
	);
};
;
export default ServicesPage;
;
</string>;
</string>;
</Record>