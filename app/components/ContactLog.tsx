'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, Clock, ExternalLink } from 'lucide-react';
import type { ContactLogEntry } from '../lib/portal-storage';

interface ContactLogProps {
  log: ContactLogEntry[];
}

export default function ContactLog({ log }: ContactLogProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      {log.length === 0 ? (
        <div className="p-8 text-center">
          <Mail className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No contact activity yet.</p>
          <a href="/" className="text-indigo-600 hover:underline text-sm mt-2 inline-block">
            Explore services
          </a>
        </div>
      ) : (
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-gray-600 font-medium flex items-center gap-1">
                <Calendar className="w-4 h-4" /> Date
              </th>
              <th className="px-4 py-3 text-left text-gray-600 font-medium">Method</th>
              <th className="px-4 py-3 text-left text-gray-600 font-medium">Details</th>
            </tr>
          </thead>
          <tbody>
            {log.map((entry, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
              >
                <td className="px-4 py-3 text-gray-900">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    {new Date(entry.timestamp).toLocaleDateString()}
                  </div>
                  <div className="text-xs text-gray-500">{new Date(entry.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                      entry.method === 'email'
                        ? 'bg-blue-50 text-blue-700'
                        : 'bg-green-50 text-green-700'
                    }`}
                  >
                    {entry.method === 'email' ? <Mail className="w-3 h-3" /> : <Phone className="w-3 h-3" />}
                    {entry.method}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {entry.note ? (
                    <span title={entry.note}>{entry.note}</span>
                  ) : (
                    <span className="text-gray-400 italic">No additional note</span>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
