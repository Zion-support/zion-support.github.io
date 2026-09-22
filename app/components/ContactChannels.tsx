import { siteContact } from '../lib/siteContact';

const channels = [
  { label: 'Call', value: siteContact.phone, href: siteContact.phoneHref },
  { label: 'Email', value: siteContact.email, href: `mailto:${siteContact.email}` },
  { label: 'Office', value: siteContact.address, href: siteContact.mapsUrl },
  { label: 'Hours', value: siteContact.hours },
  { label: 'Languages', value: siteContact.languages },
  { label: 'Response', value: siteContact.response },
];

export default function ContactChannels() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {channels.map((channel) => {
        const content = (
          <>
            <div className="text-xs uppercase tracking-wider text-slate-500">{channel.label}</div>
            <div className="mt-1 text-sm font-medium text-white">{channel.value}</div>
          </>
        );
        return channel.href ? (
          <a key={channel.label} href={channel.href} className="page-card hover:border-purple-500/40">
            {content}
          </a>
        ) : (
          <div key={channel.label} className="page-card">
            {content}
          </div>
        );
      })}
    </div>
  );
}
